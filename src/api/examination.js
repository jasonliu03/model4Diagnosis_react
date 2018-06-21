
export default function getExaminationResult(params) {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params),
    credentials: 'same-origin',
  };
  return fetch('/api/test-tool/examinations', options);
}
