import Project from "./../models/Project";

export async function getProjects(req, res) {
  const projects = await Project.findAll();
  return res.status(200).json({
    response: projects,
  });
}

export async function getOneProject(req, res) {
  const { id } = req.params;
  const oneProject = await Project.findOne({
    where: { id },
  });
  return res.status(200).json({
    response: oneProject,
  });
}

export async function createProject(req, res) {
  const { name, priority, description, delivarydate } = req.body;
  console.log(req.body);

  try {
    const newProject = await Project.create(
      {
        name,
        priority,
        description,
        delivarydate,
      },
      {
        fields: ["name", "priority", "description", "delivarydate"],
      }
    );

    if (newProject) {
      return res.status(200).json({
        response: newProject,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      response: "Something goes wrong",
    });
  }
}

export async function deleteOneProject(req, res) {
  const { id } = req.params;
  const deleteRowCount = await Project.destroy({
    where: {
      id,
    },
  });
  res.status(200).json({
    message: "project was deleted",
    count: deleteRowCount,
  });
}

export async function updateOneProject(req, res) {
  const { id } = req.params;
  const { name, priority, description, delivarydate } = req.body;
  const projectsToUpdate = await Project.findAll({
    attributes: ["id", "name", "priority", "description", "delivarydate"],
    where: {
      id,
    },
  });

  if (projectsToUpdate.length > 0) {
    projectsToUpdate.forEach(async (project) => {
      await project.update({
        name,
        priority,
        description,
        delivarydate,
      });
    });
  }

  return res.status(200).json({
    response: "Project updated",
  });
}
