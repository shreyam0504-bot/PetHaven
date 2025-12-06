const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Serve static frontend (ERN: Express + React + Node, no Mongo)
const publicPath = path.join(__dirname, '..');
app.use(express.static(publicPath));

// Default to landing page
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});


const dbPath = path.join(__dirname, 'data.json');

function readDb() {
  try {
    const raw = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(raw || '{"requests": []}');
  } catch {
    return { requests: [] };
  }
}

function writeDb(db) {
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
}

// Get all requests
app.get('/requests', (req, res) => {
  const db = readDb();
  res.json(db.requests || []);
});

// Create a new request
app.post('/requests', (req, res) => {
  const db = readDb();
  db.requests = db.requests || [];

  const { petName, adopterName, adopterEmail, adopterReason } = req.body || {};
  if (!petName || !adopterName || !adopterEmail) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newReq = {
    id: Date.now().toString(),
    petName,
    adopterName,
    adopterEmail,
    adopterReason: adopterReason || '',
    status: 'Pending',
    date: new Date().toISOString(),
    adminMessage: '',
    appointment: null
  };

  db.requests.push(newReq);
  writeDb(db);
  res.status(201).json(newReq);
});

// Update a request (status / appointment / message)
app.put('/requests/:id', (req, res) => {
  const db = readDb();
  db.requests = db.requests || [];

  const idx = db.requests.findIndex(r => r.id === req.params.id);
  if (idx === -1) {
    return res.status(404).json({ error: 'Request not found' });
  }

  const existing = db.requests[idx];
  const body = req.body || {};

  db.requests[idx] = {
    ...existing,
    status: body.status || existing.status,
    appointment: body.appointment ?? existing.appointment,
    adminMessage: body.adminMessage ?? existing.adminMessage
  };

  writeDb(db);
  res.json(db.requests[idx]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Pet Haven backend running on http://localhost:' + PORT);
});