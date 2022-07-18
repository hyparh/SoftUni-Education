using System;
using System.Collections.Generic;
using System.Linq;

namespace _03.TheStoryTelling
{
    public class Program
    {
        private static Dictionary<string, List<string>> graph;
        private static HashSet<string> passedNodes;

        static void Main()
        {
            ReadInputAndFillTheGraph();

            passedNodes = new HashSet<string>();

            foreach (var parentNode in graph.Keys)
            {
                DFS(parentNode);
            }

            Console.WriteLine(String.Join(" ", passedNodes.Reverse()));
        }

        private static void ReadInputAndFillTheGraph()
        {
            graph = new Dictionary<string, List<string>>();

            string command;

            while ((command = Console.ReadLine()) != "End")
            {
                string[] cmdArgs = command.Split("->", StringSplitOptions.RemoveEmptyEntries);

                string preStory = cmdArgs[0].Trim();

                // If the node is first time occured
                if (!graph.ContainsKey(preStory))
                {
                    graph[preStory] = new List<string>();
                }

                // No post stories
                if (cmdArgs.Length < 2)
                {
                    continue;
                }

                string[] postStories = cmdArgs[1].Split(" ", StringSplitOptions.RemoveEmptyEntries);

                graph[preStory].AddRange(postStories);
            }
        }

        private static void DFS(string parentNode)
        {
            if (passedNodes.Contains(parentNode))
            {
                return;
            }

            foreach (var childNode in graph[parentNode])
            {
                // DFS for every child of the parent node
                DFS(childNode);
            }

            passedNodes.Add(parentNode);
        }
    }
}