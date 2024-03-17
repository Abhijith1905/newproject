const Student = require("../models/Student")
const Faculty = require("../models/Faculty")
const Admin = require("../models/Admin")
const Courses = require("../models/Courses")


 const viewstudents = async (request, response) => 
 {
    try 
    {
      const students = await Student.find();
      if(students.length==0)
      {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(students);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };

  const viewfaculty = async (request, response) => 
 {
    try 
    {
      const faculty = await Faculty.find();
      if(faculty.length==0)
      {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(faculty);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };
  
  
  const deletestudent = async (request, response) => 
 {
    try 
    {
      const studentid = request.params.studentid
      const student = await Student.findOne({"studentid":studentid})
      if(student!=null)
      {
        await Student.deleteOne({"studentid":studentid})
        response.send("Deleted Successfully")
      }
      else
      {
        response.send("Email ID Not Found")
      }

    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };

  const checkadminlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       console.log(input)
       const admin = await Admin.findOne(input)
       response.json(admin)
     } 
     catch (error) 
     {
       response.send('message');
     }
   };



  const insertstudent = async (request, response) => {
    try 
    {
      const input =  request.body;
      const student = new Student(input);
      await student.save();
      response.send('Registered Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };

  const insertfaculty = async (request, response) => {
    try 
    {
      const input =  request.body;
      const faculty = new Faculty(input);
      await faculty.save();
      response.send('Registered Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };
  
  const createcourse = async (request, response) => {
    try 
    {
      const input =  request.body;
      const course = new Courses(input);
      await course.save();
      response.send('Registered Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };
  
  const viewcourse = async (request, response) => 
 {
    try 
    {
      const course= await Courses.find();
      if(course.length==0)
      {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(course);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };

  const deletefaculty = async (request, response) => 
 {
    try 
    {
      const facultyid = request.params.facultyid
      const faculty = await Faculty.findOne({"facultyid":facultyid})
      if(faculty!=null)
      {
        await Faculty.deleteOne({"facultyid":facultyid})
        response.send("Deleted Successfully")
      }
      else
      {
        response.send("Faculty ID Not Found")
      }

    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };

  const deletecourse = async (request, response) => 
 {
    try 
    {
      const coursecode = request.params.coursecode
      const course = await Courses.findOne({"coursecode":coursecode})
      if(course!=null)
      {
        await Courses.deleteOne({"coursecode":coursecode})
        response.send("Deleted Successfully")
      }
      else
      {
        response.send("Course Code Not Found")
      }

    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };


  const resetpassword = async (request, response) => {
    try 
    {
      const { username, currentPassword, newPassword } = request.body;
      const user = await Admin.findOne(username)
      if (!user) {
        return response.send('User not found');
      }
      else if (user.password !== currentPassword) {
        return response.send('Invalid current password');
      }
      else
      {
        user.password = newPassword;
        await user.save();
        response.send('Password updated successfully');
      }
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };

  module.exports = {checkadminlogin,viewstudents,viewfaculty,viewcourse,insertstudent,insertfaculty,createcourse,deletestudent,deletefaculty,deletecourse,resetpassword}