function printRange(start, end, skip)
{

  if (skip==undefined) {
    skip===1;
  }

  if (end==undefined) {
    start===0;
    end===printRange();
  }

  while (start < end) {
    console.log(start);
    start += skip;
  }
}

printRange();
