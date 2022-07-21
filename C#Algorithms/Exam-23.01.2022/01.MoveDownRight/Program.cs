using System;
using System.Collections.Generic;

namespace _02.MoveDownRight
{
    internal class Program
    {
        private static int[,] matrix;
        private static Dictionary<string, long> cache = new Dictionary<string, long>();

        static void Main()
        {
            var rows = int.Parse(Console.ReadLine());
            var cols = int.Parse(Console.ReadLine());

            matrix = new int[rows, cols];

            Console.WriteLine(FindNumberOfUniquePaths(rows, cols));
        }

        private static long FindNumberOfUniquePaths(int rows, int cols)
        {
            if (rows is 1 || cols is 1)
            {
                return 1;
            }

            var key = $"{rows}-{cols}";

            if (cache.ContainsKey(key))
            {
                return cache[key];
            }

            var result = FindNumberOfUniquePaths(rows - 1, cols) + FindNumberOfUniquePaths(rows, cols - 1);
            cache[key] = result;

            return result;
        }
    }
}