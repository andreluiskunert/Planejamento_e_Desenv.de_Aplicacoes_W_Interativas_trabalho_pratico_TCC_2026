// a) swap
const swap = (vetor, i, j) => {
  const temp = vetor[i];
  vetor[i] = vetor[j];
  vetor[j] = temp;
  return vetor;
};

// b) shuffle
const shuffle = (vetor, trocas = 20) => {
  const n = vetor.length;
  for (let k = 0; k < trocas; k++) {
    const i = Math.floor(Math.random() * n);
    const j = Math.floor(Math.random() * n);
    swap(vetor, i, j);
  }
  return vetor;
};

// c) bubble_sort
const bubble_sort = (vetor) => {
  const v = [...vetor];
  for (let i = 0; i < v.length - 1; i++) {
    for (let j = 0; j < v.length - 1 - i; j++) {
      if (v[j] > v[j + 1]) swap(v, j, j + 1);
    }
  }
  return v;
};

// d) selection_sort
const selection_sort = (vetor) => {
  const v = [...vetor];
  for (let i = 0; i < v.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < v.length; j++) {
      if (v[j] < v[min]) min = j;
    }
    if (min !== i) swap(v, i, min);
  }
  return v;
};

// f) particionamento (apoio do quick sort)
const particionamento = (vetor, ini, fim, pivot) => {
  let i = ini;
  let j = fim;

  while (i <= j) {
    while (vetor[i] < pivot) i++;
    while (vetor[j] > pivot) j--;
    if (i <= j) {
      swap(vetor, i, j);
      i++;
      j--;
    }
  }
  return i;
};

// e) quick_sort (recursivo)
const quick_sort = (vetor, ini = 0, fim = vetor.length - 1) => {
  if (ini >= fim) return vetor;

  const meio = Math.floor((ini + fim) / 2);
  const pivot = vetor[meio];

  const index = particionamento(vetor, ini, fim, pivot);

  if (ini < index - 1) quick_sort(vetor, ini, index - 1);
  if (index < fim) quick_sort(vetor, index, fim);

  return vetor;
};