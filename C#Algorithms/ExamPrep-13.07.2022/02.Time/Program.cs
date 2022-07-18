﻿using System;
using System.Collections.Generic;
using System.Linq;

namespace _02.Time
{
    internal class Program
    {
        // this kind of matrix [][] is much faster then the common one [,]
        private static int[][] tableLcs;

        static void Main()
        {
            int[] firstSequence = Console.ReadLine()
                .Split()
                .Select(int.Parse)
                .ToArray();

            int[] secondSequence = Console.ReadLine()
                .Split()
                .Select(int.Parse)
                .ToArray();

            InitializeTable(firstSequence, secondSequence);

            var longestCommonSubsequence = new Stack<int>();

            int row = firstSequence.Length;
            int col = secondSequence.Length;

            while (row > 0 && col > 0)
            {
                if (firstSequence[row - 1] == secondSequence[col - 1])
                {
                    longestCommonSubsequence.Push(firstSequence[row - 1]);
                    row--;
                    col--;
                }
                else if (tableLcs[row][col - 1] >= tableLcs[row - 1][col])
                {
                    col--;
                }
                else
                {
                    row--;
                }
            }

            // this count the array (or matrix) backwards
            // or: give me the value of last row last col
            int lcsLength = tableLcs[^1][^1];

            Console.WriteLine(String.Join(" ", longestCommonSubsequence));
            Console.WriteLine(lcsLength);
        }

        private static void InitializeTable(int[] firstSequence, int[] secondSequence)
        {
            tableLcs = new int[firstSequence.Length + 1][];

            for (int row = 0; row < tableLcs.Length; row++)
            {
                tableLcs[row] = new int[secondSequence.Length + 1];
            }

            for (int row = 1; row < tableLcs.Length; row++)
            {
                for (int col = 1; col < tableLcs[row].Length; col++)
                {
                    if (firstSequence[row - 1] == secondSequence[col - 1])
                    {
                        // equal values
                        tableLcs[row][col] = tableLcs[row - 1][col - 1] + 1;
                    }
                    else
                    {
                        tableLcs[row][col] = Math.Max(tableLcs[row - 1][col], tableLcs[row][col - 1]);
                    }
                }
            }
        }
    }
}