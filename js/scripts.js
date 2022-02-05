
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})

const burger = document.querySelector('.burger')
const sidebar = document.querySelector('.sidebar')
const bgSidebar = document.querySelector('.bg-sidebar')

burger.addEventListener('click', function() {
	this.classList.toggle('change')
	sidebar.classList.toggle('change')
	bgSidebar.classList.toggle('change')
})

bgSidebar.addEventListener('click', function() {
	this.classList.remove('change')
	sidebar.classList.remove('change')
	burger.classList.remove('change')
})
