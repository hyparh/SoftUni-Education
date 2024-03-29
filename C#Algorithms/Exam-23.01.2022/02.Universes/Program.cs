﻿using System;
using System.Collections.Generic;

namespace _02.Universes
{
    internal class Program
    {
        private static Dictionary<string, List<string>> graph = new Dictionary<string, List<string>>();
        private static HashSet<string> visited = new HashSet<string>();

        static void Main()
        {
            int lines = int.Parse(Console.ReadLine());

            for (int i = 0; i < lines; i++)
            {
                var parts = Console.ReadLine()
                    .Split(" - ", StringSplitOptions.RemoveEmptyEntries);

                var planet1 = parts[0].Trim();
                var planet2 = parts[1].Trim();

                if (!graph.ContainsKey(planet1))
                {
                    graph.Add(planet1, new List<string>());
                }

                if (!graph.ContainsKey(planet2))
                {
                    graph.Add(planet2, new List<string>());
                }

                graph[planet1].Add(planet2);
            }

            foreach (var node in graph.Keys)
            {
                DFS(node);
            }

            var universeCount = visited.Count - lines;

            Console.WriteLine(universeCount);
        }

        private static void DFS(string node)
        {
            if (visited.Contains(node))
            {
                return;
            }

            visited.Add(node);

            foreach (var child in graph[node])
            {
                DFS(child);
            }
        }
    }
}
