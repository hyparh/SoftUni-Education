using System;
using System.Collections.Generic;
using System.Linq;

namespace _02.MoveDownRight
{
    internal class Program
    {
        static void Main()
        {
            var rows = int.Parse(Console.ReadLine());
            var cols = int.Parse(Console.ReadLine());

            var matrix = new int[rows, cols];

            for (int r = 0; r < rows; r++)
            {
                var rowElements = Console.ReadLine()
                        .Split()
                        .Select(int.Parse)
                        .ToArray();

                for (int c = 0; c < rowElements.Length; c++)
                {
                    matrix[r, c] = rowElements[c];
                }
            }

            var dp = new int[rows, cols];
            dp[0, 0] = matrix[0, 0];

            for (int c = 1; c < cols; c++)
            {
                dp[0, c] = dp[0, c - 1] + matrix[0, c];
            }

            for (int r = 1; r < rows; r++)
            {
                dp[r, 0] = dp[r - 1, 0] + matrix[r, 0];
            }

            for (int r = 1; r < rows; r++)
            {
                for (int c = 1; c < cols; c++)
                {
                    var upper = dp[r - 1, c];
                    var left = dp[r, c - 1];

                    dp[r, c] = Math.Max(upper, left) + matrix[r, c];
                }
            }

            var path = new Stack<string>();

            var row = rows - 1;
            var col = cols - 1;

            while (row > 0 && col > 0)
            {
                path.Push($"{matrix[row, col]}");

                var upper = dp[row - 1, col];
                var left = dp[row, col - 1];

                if (upper > left)
                {
                    row--;
                }
                else
                {
                    col--;
                }
            }

            while (row > 0)
            {
                path.Push($"{matrix[row, col]}");
                row--;
            }

            while (col > 0)
            {
                path.Push($"{matrix[row, col]}");
                col--;
            }

            path.Push($"{matrix[row, col]}");

            var sum = 0;

            var result = path.ToArray();

            for (int i = 0; i < result.Length; i++)
            {
                var number = int.Parse(result[i]);
                sum += number;
            }

            Console.WriteLine(sum);
            Console.WriteLine(String.Join(" ", path.Reverse()));
        }
    }
}