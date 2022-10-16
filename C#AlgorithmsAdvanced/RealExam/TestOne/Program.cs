using System;
using System.Collections.Generic;
using System.Linq;

namespace TestOne
{
    // Max Flow
    public class Program
    {
        private static int[,] graph;
        private static int[] parent;

        static void Main()
        {
            var nodesCount = int.Parse(Console.ReadLine());
            var edgesCount = int.Parse(Console.ReadLine());
            var sourceTarget = Console.ReadLine()
                .Split(new[] { " " }, StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray();

            var source = sourceTarget[0];
            var target = sourceTarget[1];

            graph = new int[nodesCount, nodesCount];

            for (int node = 0; node < nodesCount; node++)
            {
                var row = Console.ReadLine()
                    .Split(new[] { " " }, StringSplitOptions.RemoveEmptyEntries)
                    .Select(int.Parse)
                    .ToArray();

                for (int child = 0; child < row.Length; child++)
                {
                    graph[node, child] = row[child];
                }
            }

            parent = new int[nodesCount];
            //Array.Fill(parent, -1);

            for (int node = 0; node < parent.Length; node++)
            {
                parent[node] = -1;
            }

            var maxFlow = 0;

            while (BFS(source, target))
            {
                var minFlow = GetMinFlow(target);

                ApplyFlow(target, minFlow);

                maxFlow += minFlow;
            }

            Console.WriteLine(maxFlow);
        }

        private static void ApplyFlow(int node, int flow)
        {
            while (parent[node] != -1)
            {
                var prev = parent[node];
                graph[prev, node] -= flow;
                node = prev;
            }
        }

        private static int GetMinFlow(int node)
        {
            var minFlow = int.MaxValue;

            while (parent[node] != -1)
            {
                var prev = parent[node];
                var flow = graph[prev, node];

                if (flow < minFlow)
                {
                    minFlow = flow;
                }

                node = prev;
            }

            return minFlow;
        }

        private static bool BFS(int source, int target)
        {
            var visited = new bool[graph.GetLength(0)];
            visited[source] = true;

            var queue = new Queue<int>();
            queue.Enqueue(source);

            while (queue.Count > 0)
            {
                var node = queue.Dequeue();

                for (int child = 0; child < graph.GetLength(1); child++)
                {
                    if (!visited[child] && graph[node, child] > 0)
                    {
                        visited[child] = true;
                        queue.Enqueue(child);
                        parent[child] = node;
                    }
                }
            }

            return visited[target];
        }
    }
}
