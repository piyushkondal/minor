import React from 'react'

const TeacherDashboard = () => {
  return (
    // <div>Dashboard</div>
    <div className="min-h-screen bg-gray-100 p-6">
<h1 className="text-3xl font-bold mb-6">Teacher Dashboard</h1>
 

{/* Stats */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

<div className="bg-white p-5 rounded-xl shadow">

<h3 className="text-gray-500">Students</h3>

<p className="text-3xl font-bold">120</p>

</div>

 

<div className="bg-white p-5 rounded-xl shadow">
<h3 className="text-gray-500">Classes</h3>

<p className="text-3xl font-bold">8</p>

</div>

 

<div className="bg-white p-5 rounded-xl shadow">

<h3 className="text-gray-500">Assignments</h3>

<p className="text-3xl font-bold">24</p>

</div>

 

<div className="bg-white p-5 rounded-xl shadow">

<h3 className="text-gray-500">Attendance</h3>

<p className="text-3xl font-bold">94%</p>

</div>

</div>

 

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


{/* Student Table */}

<div className="lg:col-span-2 bg-white rounded-xl shadow p-5">
<h2 className="text-xl font-semibold mb-4">


</h2>
 

<table className="w-full">

<thead>

<tr className="border-b">

<th className="text-left py-2">Name</th>

<th className="text-left py-2">Grade</th>

<th className="text-left py-2">Attendance</th>

</tr>

</thead>


{/* <tbody>

{students.map((student) => (

<tr key={student.id} className="border-b">
<td className="py-3">{student.name}</td>

<td>{student.grade}</td>

<td>{student.attendance}</td>

</tr>

))}

</tbody> */}

</table>

</div>

 

{/* Recent Activities */}

<div className="bg-white rounded-xl shadow p-5">

<h2 className="text-xl font-semibold mb-4">

Recent Activities

</h2>


<ul className="space-y-3">

<li>📚 New assignment created</li>

<li>✅ Attendance submitted</li>

<li>🎓 Grade report updated</li>

<li>📢 Class announcement posted</li>

</ul>

</div>

</div>

 

{/* Assignments */}

<div className="bg-white rounded-xl shadow p-5 mt-6">

<h2 className="text-xl font-semibold mb-4">Assignments</h2>

 

<div className="space-y-3">

<div className="flex justify-between border-b pb-2">

<span>Math Homework</span>

<span className="text-blue-600">Due Tomorrow</span>

</div>

 

<div className="flex justify-between border-b pb-2">

<span>Science Project</span>

<span className="text-red-600">Due This Week</span>
</div>
 

<div className="flex justify-between">

<span>English Essay</span>

<span className="text-green-600">Completed</span>

</div>

</div>

</div>

</div>

  )
}

export default TeacherDashboard
