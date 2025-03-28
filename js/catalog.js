const filterSections = document.querySelectorAll('.filter-section');

filterSections.forEach(section => {
    const btn = section.querySelector('.filter-section__btn');
    const sectionOptions = section.querySelector('.filter-section__options');

    btn.addEventListener('click', ()=>{
        sectionOptions.classList.toggle('hidden');
        btn.classList.toggle('rotated');
    })
});

const filter = document.querySelector('.filter-container');
const openFilterBtn = document.querySelector('#openFilter');
const closeFilterBtn = document.querySelector('#closeFilter');

openFilterBtn.addEventListener('click', ()=> {
    filter.classList.toggle('active');
    filterSections.forEach(section => {
        const btn = section.querySelector('.filter-section__btn');
        const sectionOptions = section.querySelector('.filter-section__options');
        sectionOptions.classList.add('hidden');
        btn.classList.toggle('rotated');
    });
})
closeFilterBtn.addEventListener('click', ()=> {
    filter.classList.toggle('active');
    filterSections.forEach(section => {
        const btn = section.querySelector('.filter-section__btn');
        const sectionOptions = section.querySelector('.filter-section__options');
        sectionOptions.classList.remove('hidden');
        btn.classList.toggle('rotated');
    });
})