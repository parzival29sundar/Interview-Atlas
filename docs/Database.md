# Roadmap Collection

roadmaps

{
  _id,
  title,
  slug,
  description,
  roadmapType
}

roadmap_nodes

{
  _id,
  roadmapId,
  parentId,
  title,
  icon,
  color,
  difficulty,
  estimatedHours,
  resources,
  order
}

Relationships

Roadmap
    ↓
Topic
    ↓
Pattern
    ↓
Problem
    ↓
Resource

Frontend already supports unlimited nesting through recursive children arrays.