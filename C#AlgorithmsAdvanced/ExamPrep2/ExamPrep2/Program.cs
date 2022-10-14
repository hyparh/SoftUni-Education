using System;
using System.Linq;

namespace ExamPrep2
{
    public class Program
    {
        // Here we use Knapsack algorithm
        static void Main()
        {
            var values = Console.ReadLine()
                .Split(", ")
                .Select(int.Parse)
                .ToArray();

            var spaces = Console.ReadLine()
                .Split(", ")
                .Select(int.Parse)
                .ToArray();

            var maxCapacity = int.Parse(Console.ReadLine());

            var dp = new int[values.Length + 1, maxCapacity + 1];

            for (int row = 1; row < dp.GetLength(0); row++)
            {
                var itemValue = values[row - 1];
                var itemWeight = spaces[row - 1];

                for (int capacity = 1; capacity < dp.GetLength(1); capacity++)
                {
                    var skipItemValue = dp[row - 1, capacity];

                    if (itemWeight > capacity) 
                    {
                        dp[row, capacity] = skipItemValue;

                        continue;
                    }

                    var includeItemValue = itemValue + dp[row - 1, capacity - itemWeight];

                    dp[row, capacity] = Math.Max(skipItemValue, includeItemValue); //taking higher value

                }
            }

            Console.WriteLine($"Maximum value: {dp[values.Length, maxCapacity]}");
        }
    }
}
