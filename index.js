
const teamYear = document.getElementById('teamYear');
const member1Fields = [
    document.getElementById('member1Name'),
    document.getElementById('member1Email'),
    document.getElementById('member1Phone'),
    document.getElementById('member1Hackerrank'),
    document.getElementById('member1StudentNo'),
    document.getElementById('member1Branch'),
    document.getElementById('member1Residency'),
    document.getElementById('member1Gender')
];
const fillMember2Button = document.getElementById('fillMember2');
const member2Form = document.getElementById('member2Form');
const submitButton = document.querySelector('button[type="submit"]');

fillMember2Button.style.display = 'none';
submitButton.style.display = 'none';

function checkMember1Fields() {
    const allFilled = member1Fields.every(field => field.value.trim() !== '') && teamYear.value.trim() !== '';
    fillMember2Button.style.display = allFilled ? 'block' : 'none';
}

[...member1Fields, teamYear].forEach(field => {
    field.addEventListener('input', checkMember1Fields);
});

fillMember2Button.addEventListener('click', () => {
    member2Form.style.display = 'block';
    fillMember2Button.style.display = 'none';
    submitButton.style.display = 'block';
});

document.getElementById('teamForm').addEventListener('submit', event => {
    event.preventDefault();
    alert('Form submitted successfully!');
});
