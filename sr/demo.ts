function interest():void{
    const p = document.getElementById('num1') as HTMLInputElement;
    const r  = document.getElementById('num2') as HTMLInputElement;
    const s = document.getElementById('num3') as HTMLInputElement;
  
    const si: number = (parseFloat(p.value) * parseFloat(r.value) * parseFloat(s.value)) / 100;
  
    console.log(si);
  
  }