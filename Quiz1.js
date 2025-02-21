//Link del repositorio donde se encuentra la parte teórica
*
Planteamiento:
cree una función de JS que analice un arreglo de números que representa notas de estudiantes
y retorne un objeto con información basado en el siguiente mapa:
90-100: A
80-89: B
70-79: C
60-69: D
Below 60: F

Ejemplo: 
const studentGrades = [100, 50, 65, 70, 85, 96, 45];
const result = computeGrades(studentGrades)
console.log(result)

console:
{
parsed: [A, F, D, C, B, A, F],
passed: 5,
lose: 2
}
//