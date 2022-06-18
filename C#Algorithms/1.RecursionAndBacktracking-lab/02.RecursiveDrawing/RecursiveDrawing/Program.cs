using System;

namespace RecursiveDrawing
{
    internal class Program
    {
        static void Main()
        {
            int n = int.Parse(Console.ReadLine());

            DrawFigure(n);
        }

        private static void DrawFigure(int row)
        {
            if (row == 0)
            {
                return;
            }

            Console.WriteLine(new string('*', row)); // pre-action

            DrawFigure(row - 1);

            // this code is reached when we hit the bottom by the recursion
            // at this point on it starts going backwards drawing the #s
            Console.WriteLine(new string('#', row)); // post-action
        }
    }
}
