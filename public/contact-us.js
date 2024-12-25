function sendData() {
  const form = document.getElementById('dataForm');
  const responseDiv = document.getElementById('response');

  responseDiv.innerHTML = '';

  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  if (!data.firstname || !data.lastname || !data.email || !data.phone) {
    responseDiv.innerHTML = `<p style="color: red;">กรุณากรอข้อมูลให้ครบ !</p>`;
    return;
  }

  responseDiv.innerHTML = `<p style="color: green;">ส่งอีเมลสำเร็จ !</p>`;

  const apiUrl = 'https://mail-api-git-main-peeranat-works-projects.vercel.app/send-email';

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(result => {
      window.location.href = 'https://smart-erpg.web.app/';
    })
}
