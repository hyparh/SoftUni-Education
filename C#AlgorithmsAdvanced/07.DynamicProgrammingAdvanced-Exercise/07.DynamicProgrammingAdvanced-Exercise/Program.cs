using System;
using System.Collections.Generic;
using System.Linq;

namespace _07.DynamicProgrammingAdvanced_Exercise
{
    public class Program
    {
        public static List<int> price;
        public static int[] bestPrice;

        static void Main()
        {
            price = new List<int> { 0 };

            price.AddRange(
                Console.ReadLine()
                    .Split()
                    .Select(int.Parse));

            bestPrice = new int[price.Count];

            var connectorPrice = int.Parse(Console.ReadLine());

            CutRod(price.Count - 1, connectorPrice);

            Console.WriteLine(String.Join(" ", bestPrice.Skip(1)));
        }

        private static int CutRod(int length, int connectorPrice)
        {
            if (length is 0)
            {
                return 0;
            }

            if (bestPrice[length] != 0)
            {
                return bestPrice[length];
            }

            var currentBestPrice = price[length];

            for (int i = 1; i < length; i++)
            {
                var currentPrice = price[i] + CutRod(length - i, connectorPrice) - 2 * connectorPrice;

                if (currentPrice > currentBestPrice)
                {
                    currentBestPrice = currentPrice;
                }
            }

            bestPrice[length] = currentBestPrice;

            return currentBestPrice;
        }
    }
}
