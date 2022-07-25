​I'm particularly proud of this one because it's my own original approach that performs faster than 98.7% of JS submissions.

This approach uses an advanced two pointer technique. Visually, the pointers are used to compare the arrays like:

              1, 2, 3, 4, 5
  1, 2, 3, 4, 5

              1, 2, 3, 4, 5
     1, 2, 3, 4, 5

              1, 2, 3, 4, 5
        1, 2, 3, 4, 5


... and so on



The inner loop starts out running only once, then two times, then 3, etc.

After the bottom array shifts far enough to the right, then the number of comparisons we need to make start to subtract by 1. That's what the shrinkage variable accounts for.