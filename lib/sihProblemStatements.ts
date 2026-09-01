import sihProblemStatementsJson from "../sih2026_ps.json";

export type ProblemStatement = {
  ps_number: string;
  title: string;
  org: string;
  category: "Software" | "Hardware";
  theme: string;
};

// Map dynamically from the JSON file to remove hardcoded statements
export const SIH_PROBLEM_STATEMENTS: ProblemStatement[] = (
  (sihProblemStatementsJson as any).problemStatements ?? []
).map((ps: any) => ({
  ps_number: ps.id,
  title: ps.title,
  org: ps.organization || ps.department || "Unknown",
  category: ps.category === "Hardware" ? "Hardware" : "Software",
  theme: ps.theme || "General",
}));

// Lookup by ps_number (O(1) access)
export const PS_BY_NUMBER = new Map<string, ProblemStatement>(
  SIH_PROBLEM_STATEMENTS.map((ps) => [ps.ps_number, ps])
);

// All unique themes from the dataset
export const PS_THEMES = [...new Set(SIH_PROBLEM_STATEMENTS.map((ps) => ps.theme))].sort();
