import api from './api';

async function getVisits() {
  const { data: visits } = await api.get('visits');
  return visits;
}

async function verifyLogin(email, password) {
  const { data: users } = await api.get('users');
  const user = await users.filter(user => user.email === email && user.password === password);
  await Promise.all(user);
  console.log(user)
  if (user.length > 0) {
    return {
      name: user[0].name,
      email: user[0].email,
      id: user[0].id
    }
  }
  return false;
}

async function createAccount(email, password, name) {
  const data = {
    email,
    password,
    name
  }

  const { status } = await api.post('users', data, {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  })

  return status === 201 ? true : false;
}

async function updatedVisitor(id, data) {
  console.log(id, data)
  try {
    await api.put(`visits/${id}`, data, {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    })
  
    return true
  } catch (e) {
    return false
  }
}

async function createdVisitor(data) {
  try {
    await api.post(`visits`, data, {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    })
  
    return true
  } catch (e) {
    return false
  }
}

async function deletedVisitor(id) {
  try {
    await api.delete(`visits/${id}`, {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    })
  
    return true
  } catch (e) {
    return false
  }
}

export { getVisits, verifyLogin, createAccount, updatedVisitor, createdVisitor, deletedVisitor };
