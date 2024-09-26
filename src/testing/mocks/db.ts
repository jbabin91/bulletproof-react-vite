import { factory, primaryKey } from '@mswjs/data';
import { nanoid } from 'nanoid';

const models = {
  user: {
    id: primaryKey(nanoid),
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    teamId: String,
    role: String,
    bio: String,
    createdAt: Date.now,
  },
  team: {
    id: primaryKey(nanoid),
    name: String,
    description: String,
    createdAt: Date.now,
  },
  discussion: {
    id: primaryKey(nanoid),
    title: String,
    body: String,
    authorId: String,
    teamId: String,
    createdAt: Date.now,
  },
  comment: {
    id: primaryKey(nanoid),
    title: String,
    authorId: String,
    discussionId: String,
    createdAt: Date.now,
  },
};

export const db = factory(models);

export type Model = keyof typeof models;

const dbFilePath = 'mocked-db.json';

export async function loadDb() {
  // If we are running in a Node.js environment
  if (typeof window === 'undefined') {
    const { readFile, writeFile } = await import('node:fs/promises');
    try {
      const data = await readFile(dbFilePath, 'utf8');
      return JSON.parse(data);
    } catch (error: any) {
      if (error?.code === 'ENOENT') {
        const emptyDb = {};
        await writeFile(dbFilePath, JSON.stringify(emptyDb, null, 2));
        return emptyDb;
      } else {
        console.error('Error loading mocked DB:', error);
        return null;
      }
    }
  }
  // If we are running in a browser environment
  return Object.assign(
    JSON.parse(window.localStorage.getItem('msw-db') ?? '{}'),
  );
}

export async function storeDb(data: string) {
  // If we are running in a Node.js environment
  if (typeof window === 'undefined') {
    const { writeFile } = await import('node:fs/promises');
    await writeFile(dbFilePath, data);
  } else {
    // If we are running in a browser environment
    window.localStorage.setItem('msw-db', data);
  }
}

export async function persistDb(model: Model) {
  if (process.env.NODE_ENV === 'test') return;
  const data = db[model].getAll();
  await storeDb(JSON.stringify(data));
}

export async function initializeDb() {
  const database = await loadDb();
  for (const [key, model] of Object.entries(db)) {
    const dataEntries = database[key];
    if (dataEntries) {
      for (const entry of dataEntries) {
        model.create(entry);
      }
    }
  }
}

export function resetDb() {
  window.localStorage.clear();
}
