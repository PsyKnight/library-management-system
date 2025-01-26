interface Books {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  totalCopies: number;
  availableCopies: number;
  description: string;
  coverColor: string;
  coverUrl: string;
  videoUrl: string;
  summary: string;
  isLoaned?: boolean;
}

// interface User {
//   id: string;
//   fullName: string;
//   email: string;
//   universityId: string;
//   universityCard: string;
//   status: "PENDING" | "APPROVED" | "REJECTED" | null;
//   role: "USER" | "ADMIN" | null;
//   lastUserActivity: string | null;
//   createdAt: Date | null;
// }

interface AuthCredentials {
  fullName: string;
  email: string;
  password: string;
  universityId: string;
  universityCard: string;
}
