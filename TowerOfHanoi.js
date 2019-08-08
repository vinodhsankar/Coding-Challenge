'use strict';
// Assuming n-th disk is bottom disk (count down)
//scrP is sourcePole
//desp is destinationPole
//bufferP is bufferPole


function stepsToSolveHanoiT(n, srcP, desP, bufferP) {
  if (n >= 1) {

    // Move a tower of n-1 to the buffer peg, using the destination peg.
    stepsToSolveHanoiT(n - 1, srcP, bufferP, desP);

    // Move the remaining disk to the destination peg.
    console.log(`Move disk ${n} from Tower ${srcP} to Tower ${desP}`);

    // Move the tower of `n-1` from the `buffer peg` to the `destination peg` using the `source peg`.        
    stepsToSolveHanoiT(n - 1, bufferP, desP, srcP);
  }
  
  return;
}

stepsToSolveHanoiT(3, "A", "B", "C");
