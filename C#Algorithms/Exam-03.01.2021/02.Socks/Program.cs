using System;
using System.Collections.Generic;
using System.Linq;

namespace _02.Socks
{
    internal class Program
    {
        private static int[,] matrix;
        private static Stack<int> subsequence;

        static void Main()
        {
            var sock1 = Console.ReadLine()
                .Split()
                .Select(int.Parse)
                .ToArray();

            var sock2 = Console.ReadLine()
                .Split()
                .Select(int.Parse)
                .ToArray();

            subsequence = new Stack<int>();

            matrix = ReadMatrix(sock1, sock2);
            Subsequence(sock1, sock2);

            Console.WriteLine(matrix[sock1.Length, sock2.Length]);
        }
       
        private static int[,] ReadMatrix(int[] one, int[] two)
        {
            matrix = new int[one.Length + 1, two.Length + 1];

            for (int row = 1; row < matrix.GetLength(0); row++)
            {
                for (int col = 1; col < matrix.GetLength(1); col++)
                {
                    if (one[row - 1] == two[col - 1])
                    {
                        matrix[row, col] = matrix[row - 1, col - 1] + 1;
                    }
                    else
                    {
                        matrix[row, col] = Math.Max(matrix[row, col - 1], matrix[row - 1, col]);
                    }
                }
            }

            return matrix;
        }

        private static void Subsequence(int[] sock1, int[] sock2)
        {
            var row = sock1.Length;
            var col = sock2.Length;

            while (row > 0 && col > 0)
            {
                if (sock1[row - 1] == sock2[col - 1] &&
                    matrix[row - 1, col - 1] == matrix[row, col] - 1)
                {
                    row--;
                    col--;

                    subsequence.Push(sock1[row]);
                }
                else if (matrix[row - 1, col] > matrix[row, col - 1])
                {
                    row--;
                }
                else
                {
                    col--;
                }
            }
        }
    }
}
