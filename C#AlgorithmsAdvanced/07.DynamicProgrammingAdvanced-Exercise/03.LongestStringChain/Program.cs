using System;
using System.Collections.Generic;

namespace _03.LongestStringChain
{
    public class Program
    {
        static void Main()
        {
            var words = Console.ReadLine().Split();

            var bestLength = new int[words.Length];
            var parent = new int[words.Length];
            var maxLength = 0;
            var lastIdx = 0;

            for (int current = 0; current < words.Length; current++)
            {
                var currentString = words[current];
                var currentBestLength = 1;
                var currentParent = -1;

                for (int prev = current - 1; prev >= 0; prev--)
                {
                    var prevString = words[prev];
                    var prevLength = bestLength[prev];

                    if (currentString.Length > prevString.Length && prevLength + 1 >= currentBestLength)
                    {
                        currentBestLength = prevLength + 1;
                        currentParent = prev;
                    }
                }

                bestLength[current] = currentBestLength;
                parent[current] = currentParent;

                if (currentBestLength > maxLength)
                {
                    maxLength = currentBestLength;
                    lastIdx = current;
                }
            }

            var chain = new Stack<string>();

            while (lastIdx != -1)
            {
                var str = words[lastIdx];
                chain.Push(str);
                lastIdx = parent[lastIdx];
            }

            Console.WriteLine(String.Join(" ", chain));
        }
    }
}
