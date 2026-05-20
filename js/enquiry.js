$(function () {

    $("#date").datepicker({
        dateFormat: "dd-mm-yy",
        minDate: 0
    });

    $("#form").on("submit", function (e) {

        let name = $("input[name='name']").val().trim();
        let email = $("input[name='email']").val().trim();
        let phone = $("input[name='phone']").val().trim();
        let date = $("#date").val().trim();
        let message = $("textarea[name='message']").val().trim();

        let namePattern = /^[A-Za-z ]{3,}$/;
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        let phonePattern = /^[0-9]{10}$/;

        if (!namePattern.test(name)) {
            alert("Enter valid name (only letters, min 3 characters)");
            e.preventDefault();
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Enter valid email address");
            e.preventDefault();
            return;
        }

        if (!phonePattern.test(phone)) {
            alert("Enter valid 10-digit phone number");
            e.preventDefault();
            return;
        }

        if (date === "") {
            alert("Select a date");
            e.preventDefault();
            return;
        }

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("phone", phone);
        localStorage.setItem("date", date);
        localStorage.setItem("message", message);
    });

});
