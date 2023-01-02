document.querySelector('.burger').onclick = function() {
    this.classList.toggle('toggle');
    if(this.classList.contains('toggle')) {
        document.querySelector('.links').classList.remove('hidden');
    }
    else{
        document.querySelector('.links').classList.add('hidden')
    }
}