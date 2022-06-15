using System;

namespace GeneratingVectors
{
    internal class Program
    {
        static void Main()
        {
            var n = int.Parse(Console.ReadLine());
            var arr = new int[n];

            Gen01(arr, 0); // start filling this array from index 0
        }

        private static void Gen01(int[] arr, int index)
        {
            if (index >= arr.Length)
            {
                Console.WriteLine(String.Join(String.Empty, arr));
                return;
            }

            // 2 is the number with which we work (for the 0 and 1)
            // if we want three numbers (0, 1 and 2) we would use 3
            for (int i = 0; i < 2; i++) 
            {
                arr[index] = i;
                Gen01(arr, index + 1);
            }
        }
    }
}
