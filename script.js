<script>
document.getElementById("reservationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var persons = document.getElementById("persons").value;

    var message =
`Hello Raiyyan Hotel
Name: ${name}
Mobile: ${phone}
Date: ${date}
Time: ${time}
Persons: ${persons}

Please confirm my booking.`;

    var box = document.getElementById("result");
    box.style.display = "block";
    box.innerHTML = `
<b>Copy this message & send on WhatsApp:</b><br><br>
<textarea style="width:100%;height:150px;">${message}</textarea>
`;
});
</script>
<script>
function copyMsg(){
    var copyText = document.getElementById("msg");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Message copied. Open WhatsApp and paste.");
}
</script>

window.onload = function () {
  document.getElementById("loader").style.display = "none";
};
const sections = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const pos = section.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      section.classList.add('show');
    }
  });
});
<script src="js/script.js"></script>
