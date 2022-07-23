using System;
using System.Collections.Generic;
using System.Linq;

namespace _02.Paths
{
    public class Program
    {
        private static Dictionary<int, List<int>> graph;
        private static List<string> paths;

        static void Main()
        {
            var nodes = int.Parse(Console.ReadLine());

            graph = new Dictionary<int, List<int>>();
            paths = new List<string>();

            for (int node = 0; node < nodes; node++)
            {
                graph[node] = new List<int>();
            }

            for (int node = 0; node < nodes - 1; node++)
            {
                var parts = Console.ReadLine();

                if (!String.IsNullOrEmpty(parts))
                {
                    var children = parts.Split()
                        .Select(int.Parse)
                        .ToList();

                    graph[node] = children;
                }
            }

            GeneratePaths(nodes);

            Console.WriteLine(String.Join(Environment.NewLine, paths));
        }

        private static void GeneratePaths(int nodes)
        {
            for (int i = 0; i < nodes - 1; i++)
            {
                var path = new List<int>();

                AddPath(i, path);
            }
        }

        private static void AddPath(int start, List<int> path)
        {
            if (path.Contains(start))
            {
                return;
            }

            path.Add(start);

            foreach (var child in graph[start])
            {
                AddPath(child, path);

                if (graph[child].Count == 0)
                {
                    paths.Add(String.Join(" ", path));
                }

                var last = path.Last();

                path.Remove(last);
            }
        }
    }
}
