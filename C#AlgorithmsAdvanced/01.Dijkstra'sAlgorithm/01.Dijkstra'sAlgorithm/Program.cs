﻿using System;
using System.Collections.Generic;
using System.Linq;
using Wintellect.PowerCollections;

namespace _01.Dijkstra_sAlgorithm
{
    public class Edge
    {
        public int First { get; set; }

        public int Second { get; set; }

        public int Weight { get; set; }
    }
    public class Program
    {
        private static Dictionary<int, List<Edge>> edgesByNode;
        private static double[] distance;
        private static int[] parent;

        static void Main()
        {
            edgesByNode = new Dictionary<int, List<Edge>>();

            var edgesCount = int.Parse(Console.ReadLine());

            for (int i = 0; i < edgesCount; i++)
            {
                var edgeArgs = Console.ReadLine()
                    .Split(new[] { ", " }, StringSplitOptions.RemoveEmptyEntries)
                    .Select(int.Parse)
                    .ToArray();

                var firstNode = edgeArgs[0];
                var secondNode = edgeArgs[1];

                var edge = new Edge
                {
                    First = firstNode,
                    Second = secondNode,
                    Weight = edgeArgs[2]
                };

                if (!edgesByNode.ContainsKey(firstNode))
                {
                    edgesByNode.Add(firstNode, new List<Edge>());
                }

                if (!edgesByNode.ContainsKey(secondNode))
                {
                    edgesByNode.Add(secondNode, new List<Edge>());
                }

                edgesByNode[firstNode].Add(edge);
                edgesByNode[secondNode].Add(edge);
            }

            var biggestNode = edgesByNode.Keys.Max();

            distance = new double[biggestNode + 1];

            for (int node = 0; node < distance.Length; node++)
            {
                distance[node] = double.PositiveInfinity;
            }

            parent = new int[biggestNode + 1];

            // fill the array with -1
            for (int node = 0; node < parent.Length; node++)
            {
                parent[node] = -1;
            }

            var startNode = int.Parse(Console.ReadLine());
            var endNode = int.Parse(Console.ReadLine());

            distance[startNode] = 0;

            var bag = new OrderedBag<int>(Comparer<int>.Create((f, s) => (int) (distance[f] - distance[s])));
            bag.Add(startNode);

            while (bag.Count > 0)
            {
                var minNode = bag.RemoveFirst();

                if (double.IsPositiveInfinity(minNode))
                {
                    break;
                }

                // if we search for a single end node this if statement is good to use
                // if we search for all other nodes it cannot be used
                if (minNode == endNode)
                {
                    break;
                }

                foreach (var edge in edgesByNode[minNode])
                {
                    var otherNode = edge.First == minNode 
                        ? edge.Second 
                        : edge.First;

                    if (double.IsPositiveInfinity(distance[otherNode]))
                    {
                        bag.Add(otherNode);
                    }

                    var newDistance = distance[minNode] + edge.Weight;

                    if (newDistance < distance[otherNode])
                    {
                        parent[otherNode] = minNode;
                        distance[otherNode] = newDistance;

                        bag = new OrderedBag<int>(
                            bag,
                            Comparer<int>.Create((f, s) => (int)(distance[f] - distance[s])));
                    }                    
                }
            }

            if (double.IsPositiveInfinity(distance[endNode]))
            {
                Console.WriteLine("There is no such path.");
            }
            else
            {
                Console.WriteLine(distance[endNode]);

                var currentNode = endNode;
                var path = new Stack<int>();

                while (currentNode != -1)
                {
                    path.Push(currentNode);
                    currentNode = parent[currentNode];
                }

                Console.WriteLine(String.Join(" ", path));
            }           
        }
    }
}
