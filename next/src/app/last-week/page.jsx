'use client';

import { useEffect, useState } from "react";

export default function LastWeekPage() {
  const [profile, setProfile] = useState(null);
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileResponse, studentResponse] = await Promise.all([
          fetch("/api/last-week/profile"),
          fetch("/api/last-week/students"),
        ]);

        if (!profileResponse.ok) {
          throw new Error("Unable to load profile data");
        }

        if (!studentResponse.ok) {
          throw new Error("Unable to load student data");
        }

        const profileData = await profileResponse.json();
        const studentsData = await studentResponse.json();

        setProfile(profileData);
        setStudents(studentsData.students ?? []);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <main className="mx-auto max-w-3xl p-6">
        <p className="text-lg">Loading last week&apos;s data...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto max-w-3xl p-6">
        <p className="text-red-600">Error: {error}</p>
      </main>
    );
  }

  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-8 p-6">
      <section className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900">Course Profile</h2>
        {profile && (
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Name:</span> {profile.name}
            </li>
            <li>
              <span className="font-medium">Course:</span> {profile.course}
            </li>
            <li>
              <span className="font-medium">Year:</span> {profile.year}
            </li>
          </ul>
        )}
      </section>

      <section className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900">Student Results</h2>
        <div className="mt-4 space-y-4">
          {students.map((student) => (
            <article
              key={student.name}
              className="rounded-md border border-gray-100 bg-gray-50 p-4"
            >
              <p className="text-lg font-medium text-gray-900">{student.name}</p>
              <p className="text-gray-700">Grade: {student.grade}</p>
              <p
                className={`font-semibold ${
                  student.passed ? "text-green-600" : "text-red-600"
                }`}
              >
                {student.passed ? "Passed" : "Needs Improvement"}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
