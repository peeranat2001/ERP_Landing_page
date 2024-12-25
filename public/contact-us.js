function sendData() {
  const form = document.getElementById('dataForm');
  const responseDiv = document.getElementById('response');

  responseDiv.innerHTML = '';

  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  console.log('data :>> ', data);

  if (!data.firstname || !data.lastname || !data.email || !data.phone || !data.company || !data.employees) {
    responseDiv.innerHTML = `<p style="color: red;">กรุณากรอกข้อมูลให้ครบถ้วน!</p>`;
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
