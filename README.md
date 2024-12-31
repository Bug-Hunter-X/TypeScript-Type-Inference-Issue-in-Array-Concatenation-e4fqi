# TypeScript Type Inference Issue in Array Concatenation

This repository demonstrates a subtle type inference issue in TypeScript when concatenating arrays using the spread syntax.  The issue is that while the type inference generally works correctly for simple cases, it can fail in more complex scenarios, potentially leading to unexpected runtime errors or compiler warnings if not handled correctly.

## The Problem
The `combine` function, which simply concatenates two number arrays, might not always have its return type correctly inferred as `number[]` by the TypeScript compiler. This can lead to type errors if the result is used in a context expecting a different type.

## Solution
The solution is to explicitly annotate the return type of the `combine` function as `number[]`. This explicitly tells the compiler the intended type and prevents type inference problems.