
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

//show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display ='block';
});

//hide sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display ='none';
});

//change color-theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});

//fill table using javascript

Orders.foreach(order => {
    const tr = document.createElement('tr');
    const trContent =`
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping === 'declined' ? 'danger' : order.shipping === 'pending' ? 'warning' : 'primary' }">${order.shipping}</td>
                        <td class="primary">Details</td>
                    `;
tr.innerHTML = trContent;
document.querySelector('table tbody').appendChild(tr);   
});
