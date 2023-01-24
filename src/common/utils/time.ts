export function tempoParaSegundos(tempo: string){
    const [horas = '0', minutos = '0' , segundos = '0'] =     tempo.split(':');
    const horasEmSegundgos = Number(horas) * 3600;
    const minutosEmsegundos = Number(minutos) * 60;
    return horasEmSegundgos + minutosEmsegundos + Number(segundos);
}