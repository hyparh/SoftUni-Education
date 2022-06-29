using System;
using System.Linq;

namespace _01.BinarySearch
{
    internal class Program
    {
        static void Main()
        {
            var numbers = Console.ReadLine()
                .Split()
                .Select(int.Parse)
                .ToArray();

            InsertionSort(numbers);

            Console.WriteLine(String.Join(" ", numbers));
        }

        private static void InsertionSort(int[] numbers)
        {
            for (int i = 1; i < numbers.Length; i++)
            {
                var j = i;

                while (j > 0 && numbers[j - 1] > numbers[j])
                {
                    Swap(numbers, j, j - 1);
                    j--;
                }
            }
        }

        private static void Swap(int[] numbers, int first, int second)
        {
            var temp = numbers[first];
            numbers[first] = numbers[second];
            numbers[second] = temp;
        }
    }
}
