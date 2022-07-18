using System;
using System.Numerics;

namespace _01.TwoMinutesToMidnight
{
    public class Program
    {
        static void Main()
        {
            // use the forumula for binom coefficient to find the factorial of a given number
            int n = int.Parse(Console.ReadLine());
            int k = int.Parse(Console.ReadLine());

            BigInteger binomalCoefficient = GetFactoial(n) / (GetFactoial(k) * GetFactoial(n - k));
            Console.WriteLine(binomalCoefficient);
        }

        private static BigInteger GetFactoial(int n)
        {
            BigInteger factorial = 1;

            for (int i = 2; i <= n; i++)
            {
                factorial *= i;
            }

            return factorial;
        }
    }
}