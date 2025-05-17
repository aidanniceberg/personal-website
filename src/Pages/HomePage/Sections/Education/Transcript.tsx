import { Heading, Table, Text } from "@chakra-ui/react";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTrigger,
} from "../../../../components/ui/dialog";

const semesters = [
  {
    semester: "Fall 2021",
    classes: [
      { title: "Public Speaking", grade: "A" },
      { title: "Discrete Structures", grade: "A" },
      { title: "Fundamentals of Computer Science 1", grade: "A" },
      { title: "Intro to Math Reasoning", grade: "A" },
    ],
  },
  {
    semester: "Spring 2022",
    classes: [
      { title: "Fundamentals of Computer Science 2", grade: "A" },
      { title: "Mathematics of Data Models", grade: "A" },
      { title: "Foundations of Cybersecurity", grade: "A" },
      { title: "Technology & Human Values", grade: "A" },
    ],
  },
  {
    semester: "Summer 2022",
    classes: [{ title: "Algorithms & Data", grade: "A-" }],
  },
  {
    semester: "Fall 2022",
    classes: [
      { title: "Object-Oriented Design", grade: "A" },
      { title: "Theory of Computation", grade: "A-" },
      { title: "Foundations of Data Science", grade: "A" },
      { title: "Fundamentals of Digital Design", grade: "A" },
    ],
  },
  { semester: "Spring 2023", classes: [{ title: "Co-op", grade: "n/a" }] },
  {
    semester: "Fall 2023",
    classes: [
      { title: "Database Design", grade: "A" },
      { title: "Computer Systems", grade: "A" },
      { title: "Artificial Intelligence", grade: "B" },
      { title: "Fundamentals of Information Analytics", grade: "A" },
    ],
  },
  { semester: "Spring 2024", classes: [{ title: "Co-op", grade: "n/a" }] },
  {
    semester: "Fall 2024",
    classes: [
      { title: "Fundamentals of Software Engineering", grade: "A" },
      { title: "Machine Learning 1", grade: "A" },
      { title: "Advanced Writing", grade: "A" },
      { title: "Information Visualization for Business", grade: "A" },
    ],
  },
  {
    semester: "Spring 2025",
    classes: [
      { title: "Natural Language Processing", grade: "A" },
      { title: "Machine Learning 2", grade: "A" },
      { title: "Data Mining for Business", grade: "A" },
      { title: "Modeling for Business Analytics", grade: "A" },
    ],
  },
];

function Transcript() {
  const getGradeColor = (grade: string) => {
    if (grade.startsWith("A")) {
      return "green.600";
    } else if (grade.startsWith("B")) {
      return "yellow.600";
    } else {
      return "black";
    }
  };

  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <Text fontStyle="italic" textDecoration="underline" cursor="pointer">
          See all classes
        </Text>
      </DialogTrigger>
      <DialogContent mx={4}>
        <DialogHeader />
        <DialogBody>
          {semesters.map((semester) => (
            <>
              <Heading size="md">{semester.semester}</Heading>
              <Table.Root size="sm" mb={4}>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeader>Class</Table.ColumnHeader>
                    <Table.ColumnHeader textAlign="end">
                      Grade
                    </Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {semester.classes.map((c) => (
                    <Table.Row key={c.title}>
                      <Table.Cell>{c.title}</Table.Cell>
                      <Table.Cell
                        textAlign="end"
                        color={getGradeColor(c.grade)}
                      >
                        {c.grade}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
            </>
          ))}
        </DialogBody>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
}

export default Transcript;
