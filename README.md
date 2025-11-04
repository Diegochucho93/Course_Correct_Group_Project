# CourseCorrect: The Personalized Degree Path Assistant

**Course:** University of Texas at Arlington: FA25 INSY 4391-Artificial Intelligence for Business.

## 🎯 Project Goal

This repository contains the code for **CourseCorrect**, a prototype AI assistant designed to help university students navigate complex degree requirements. The goal is to solve common issues like missed prerequisites, scheduling conflicts, and inefficient course planning that often lead to delayed graduation.

## Problem Statement

Students struggle to interpret complex degree plans and track prerequisites, while academic advisors are overburdened with manual schedule checks. This inefficiency leads to frustrated students, higher advising workloads, and lower graduation rates for the university.

## Our Solution

CourseCorrect acts as a virtual academic assistant. By leveraging a Generative AI (LLM), it analyzes a student's major, completed courses, and transfer credits to generate an optimal, personalized semester-by-semester schedule.

This tool provides clear, explainable recommendations to keep students on track and frees advisors to focus on high-impact career guidance.

## 🛠️ Prototype Scope (This Semester)

For this course project, we are developing a prototype focused on the core planning and scheduling functions.

**Key Features:**
* **Analyzes Degree Plans:** Understands the logic of a simplified degree plan (e.g., Computer Science BS).
* **Tracks Student Progress:** Takes a student's completed courses as input.
* **Generates Schedules:** Recommends an optimal, conflict-free schedule for the upcoming semester.
* **Validates Prerequisites:** Ensures all recommendations are valid based on the student's history.
* **Provides Explanations:** Includes a rationale for its suggestions (e.g., *“You should take INSY 3300 next to unlock upper-level electives.”*).

**Constraints:**
* This prototype will **not** integrate with the university's live registration system.
* Data is limited to public course catalogs and synthetic (dummy) student data for testing.
