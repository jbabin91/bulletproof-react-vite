import { faker } from '@faker-js/faker';

function generatedUser() {
  return {
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    teamId: faker.string.uuid(),
    role: 'ADMIN',
    bio: faker.lorem.paragraph(),
    createdAt: Date.now(),
  };
}

export function createUser<T extends Partial<ReturnType<typeof generatedUser>>>(
  overrides?: T,
) {
  return { ...generatedUser(), ...overrides };
}

function generateTeam() {
  return {
    id: faker.string.uuid(),
    name: faker.company.name(),
    description: faker.lorem.paragraph(),
    createdAt: Date.now(),
  };
}

export function createTeam<T extends Partial<ReturnType<typeof generateTeam>>>(
  overrides?: T,
) {
  return { ...generateTeam(), ...overrides };
}

function generateDiscussion() {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.sentence(),
    body: faker.lorem.paragraph(),
    createdAt: Date.now(),
  };
}

export function createDiscussion<
  T extends Partial<ReturnType<typeof generateDiscussion>>,
>(
  overrides?: T & {
    authorId?: string;
    teamId?: string;
  },
) {
  return { ...generateDiscussion(), ...overrides };
}

function generateComment() {
  return {
    id: faker.string.uuid(),
    body: faker.lorem.paragraph(),
    createdAt: Date.now(),
  };
}

export function createComment<
  T extends Partial<ReturnType<typeof generateComment>>,
>(
  overrides?: T & {
    authorId?: string;
    discussionId?: string;
  },
) {
  return { ...generateComment(), ...overrides };
}
