// https://docs.google.com/forms/u/0/d/e/1FAIpQLSfkHixpm61i87K7pixgulqV99z0QMplcLD5C0QcP-T3cBwNyQ/formResponse?entry.760257597=test&entry.2103074590=adasd%40dasads.com&entry.1652608311=website&entry.62845363=social&entry.1595123500=textarea&entry.892576425=100&entry.1036041765=Sales&dlut=1746605369877&entry.892576425_sentinel=&entry.1036041765_sentinel=&fvv=1&partialResponse=%5Bnull%2Cnull%2C%22-2493256967946406427%22%5D&pageHistory=0&fbzx=-2493256967946406427&submissionTimestamp=1746605371380
const formId = '1FAIpQLSfkHixpm61i87K7pixgulqV99z0QMplcLD5C0QcP-T3cBwNyQ';
const googleFormUrl = `https://docs.google.com/forms/u/0/d/e/${formId}/formResponse`;

const submit = async (formData: FormData): Promise<boolean> => {
  const params = new URLSearchParams();
  params.set('entry.760257597', formData.get('name') as string);
  params.set('entry.2103074590', formData.get('email') as string);
  params.set('entry.1652608311', formData.get('website') as string);
  params.set('entry.62845363', formData.get('handle') as string);
  params.set('entry.1036041765', formData.get('challenge') as string);
  params.set('entry.892576425', formData.get('budget') as string);
  params.set('entry.1595123500', formData.get('message') as string);

  try {
    const response = await fetch(googleFormUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    return response.status === 200;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default submit;
