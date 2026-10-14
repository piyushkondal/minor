import { Link } from "react-router-dom";

const features = [
  {
    icon: "fa-users",
    title: "Course-based groups",
    description:
      "Students are connected to the group for their university course, giving them one place to communicate and stay up to date.",
  },
  {
    icon: "fa-bullhorn",
    title: "Teacher announcements",
    description:
      "Teachers can share important notices and updates with the students in their course group.",
  },
  {
    icon: "fa-book",
    title: "Learning materials",
    description:
      "Course materials and assignments can be shared with students through their group.",
  },
  {
    icon: "fa-cogs",
    title: "Centralized administration",
    description:
      "Administrators manage courses, groups, students, and teachers from a dedicated panel.",
  },
];

const roles = [
  {
    title: "Students",
    description:
      "After logging in, students can access the group associated with their course and view relevant notices, materials, and assignments.",
    icon: "fa-graduation-cap",
  },
  {
    title: "Teachers",
    description:
      "Teachers can use their panel to communicate course updates and share learning resources with their students.",
    icon: "fa-chalkboard-teacher",
  },
  {
    title: "Administrators",
    description:
      "Administrators oversee the platform’s courses, groups, student accounts, and teacher accounts.",
    icon: "fa-user-cog",
  },
];

export default function About() {
  return (
    <div className="super_container">
      {/* Page banner */}
      <section className="home">
        <div
          className="home_background"
          style={{
            backgroundImage: "url('/images/about.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label="Students learning together"
        />
        <div className="home_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="home_content text-center">
                  <h1 className="home_title">About CourseConnect</h1>
                  <nav className="breadcrumbs" aria-label="Breadcrumb">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li aria-current="page">About us</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project introduction */}
      <section className="about py-5">
        <div className="container">
          <div className="row about_row align-items-center">
            <div className="col-lg-6">
              <div className="about_content">
                <h2 className="about_title">
                  A connected learning space for every course
                </h2>
                <div className="about_text">
                  <p>
                    CourseConnect is a university learning communication
                    platform designed to bring students and teachers together in
                    course-based groups. It gives each course a shared online
                    space where important updates and learning resources can be
                    organized and accessed.
                  </p>
                  <p>
                    Students sign in to access the group associated with their
                    course. Teachers can share announcements, materials, and
                    assignments, while administrators manage courses, groups,
                    students, and teachers through their panel.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="p-4 p-md-5 border rounded h-100">
                <h3 className="mb-3">Our project goal</h3>
                <p className="mb-0">
                  Our goal is to make course communication more organized and
                  accessible by keeping students, teachers, and course
                  information connected in one platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform features */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row mb-4">
            <div className="col text-center">
              <h2 className="teachers_title">What the platform offers</h2>
              <p className="mt-3">
                Tools to support communication and course coordination.
              </p>
            </div>
          </div>

          <div className="row">
            {features.map((feature) => (
              <div className="col-md-6 col-lg-3 mb-4" key={feature.title}>
                <article className="p-4 border rounded bg-white h-100">
                  <div className="mb-3" aria-hidden="true">
                    <i className={`fa ${feature.icon} fa-2x`} />
                  </div>
                  <h3 className="h5">{feature.title}</h3>
                  <p className="mb-0">{feature.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User roles */}
      <section className="teachers py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col text-center">
              <h2 className="teachers_title">
                Designed for the university community
              </h2>
              <p className="mt-3">
                Each user has a role that supports the learning process.
              </p>
            </div>
          </div>

          <div className="row">
            {roles.map((role) => (
              <div className="col-md-4 mb-4" key={role.title}>
                <article className="p-4 border rounded h-100 text-center">
                  <div className="mb-3" aria-hidden="true">
                    <i className={`fa ${role.icon} fa-2x`} />
                  </div>
                  <h3 className="h5">{role.title}</h3>
                  <p className="mb-0">{role.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="about_title">How it works</h2>
              <p className="mt-3">
                Administrators set up courses and manage the people and groups
                associated with them. Teachers share course information through
                their panel. Students log in to access the group for their
                course and keep up with relevant updates and resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="about_title">
            Learning works better when everyone is connected
          </h2>
          <p className="mt-3">
            CourseConnect brings course communication and resources together in
            one dedicated space.
          </p>
          <div className="mt-4">
            <Link to="/ViewCategory" className="btn btn-primary">
              Explore courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
