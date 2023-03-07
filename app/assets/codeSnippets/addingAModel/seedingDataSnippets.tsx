export const originalCreateUserSnippetComplete = `import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  const email = "rachel@remix.run";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash("racheliscool", 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  // [...]
}
`;

export const creatingUserAttributesSnippet = `async function seed() {
  const email = "rachel@remix.run";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash("racheliscool", 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  // [...]
}`;

export const originalPrismaCreateUserSnippet = `const user = await prisma.user.create({
  data: {
    email,
    password: {
      create: {
        hash: hashedPassword,
      },
    },
  },
});`;

export const basicMembershipSeedSnippet = `async function seed() {
  // Delete any Membership records from previous seeds
  await prisma.membership.deleteMany({});

  // Create new Membership records
  const basicMembership = await prisma.membership.create({
    data: {
      level: "Basic",
      description: "1 martial art - 2 sessions per week. Monthly fee.",
      price: "£25.00",
    },
  });

  // [...I've cut some code out here...]
  // [...but keep it in your original!...];
}`;

export const addAllMembershipsSnippet = `async function seed() {
  // Delete any Membership records from previous seeds
  await prisma.membership.deleteMany({});

  // Create new Membership records
  const basicMembership = await prisma.membership.create({
    data: {
      level: "Basic",
      description: "1 martial art - 2 sessions per week. Monthly fee.",
      price: "£25.00",
    },
  });
  const intermediateMembership = await prisma.membership.create({
    data: {
      level: "Intermediate",
      description: "1 martial art - 3 sessions per week). Monthly fee",
      price: "£35.00",
    },
  });
  await prisma.membership.create({
    data: {
      level: "Advanced",
      description: "Any 2 martial arts - 5 sessions per week). Monthly fee",
      price: "£45.00",
    },
  });
  await prisma.membership.create({
    data: {
      level: "Elite",
      description: "Unlimited classes. Monthly fee",
      price: "£60.00",
    },
  });
  await prisma.membership.create({
    data: {
      level: "Junior",
      description: "Can attend all-kids martial arts sessions. Monthly fee",
      price: "£25.00",
    },
  });

  // [...rest of seed code here...']`;

export const originalCreateUsersAndNotesSnippet = `const hashedPassword = await bcrypt.hash("racheliscool", 10);

const user = await prisma.user.create({
  data: {
    email,
    password: {
      create: {
        hash: hashedPassword,
      },
    },
  },
});

await prisma.note.create({
  data: {
    title: "My first note",
    body: "Hello, world!",
    userId: user.id,
  },
});

await prisma.note.create({
  data: {
    title: "My second note",
    body: "Hello, world!",
    userId: user.id,
  },
});`;

export const basicMembershipSeed = `const basicMembership = await prisma.membership.create({
  data: {
    level: "Basic",
    description: "1 martial art - 2 sessions per week. Monthly fee.",
    price: "£25.00",
  },
});`;

export const createUserWithBasicMembershipSnippet = `const user = await prisma.user.create({
  data: {
    email,
    password: {
      create: {
        hash: hashedPassword,
      },
    },
    membershipId: basicMembership.id,
  },
});`;

export const createIntermediateUserMemberSnippet = `const intermediateMemberEmail = "intermediateMember@email.com";

// cleanup the existing database
await prisma.user
  .delete({ where: { email: intermediateMemberEmail } })
  .catch(() => {
    // no worries if it doesn't exist yet
  });

await prisma.user.create({
  data: {
    email: intermediateMemberEmail,
    password: {
      create: {
        hash: hashedPassword,
      },
    },
    membershipId: intermediateMembership.id,
  },
});`;
