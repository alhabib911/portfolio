-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Blogs table
create table if not exists blogs (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text unique not null,
  date date not null default current_date,
  read_time text not null default '1 min read',
  category text not null,
  image_url text,
  description text,
  content text[] default '{}',
  is_published boolean default false,
  created_at timestamptz default now()
);

-- Projects table
create table if not exists projects (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text,
  tech_stack text[] default '{}',
  live_url text,
  github_url text,
  image_url text,
  category text,
  is_published boolean default false,
  created_at timestamptz default now()
);

-- Skills table
create table if not exists skills (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  category text not null,
  level integer default 80 check (level >= 0 and level <= 100),
  icon text,
  sort_order integer default 0
);

-- Testimonials table
create table if not exists testimonials (
  id uuid primary key default uuid_generate_v4(),
  client_name text not null,
  designation text,
  company text,
  photo_url text,
  review text not null,
  rating integer default 5 check (rating >= 1 and rating <= 5),
  is_published boolean default false,
  created_at timestamptz default now()
);

-- Services table
create table if not exists services (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text,
  icon text,
  features text[] default '{}',
  sort_order integer default 0
);

-- About table (single row)
create table if not exists about (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  tagline text,
  bio text,
  profile_photo_url text,
  resume_url text,
  email text,
  phone text,
  location text,
  github_url text,
  linkedin_url text,
  twitter_url text,
  whatsapp text,
  years_exp text default '3+',
  projects_count text default '50+',
  clients_count text default '30+'
);

-- RLS Policies: public read, no public write
alter table blogs enable row level security;
alter table projects enable row level security;
alter table skills enable row level security;
alter table testimonials enable row level security;
alter table services enable row level security;
alter table about enable row level security;

-- Public can read published blogs
create policy "Public read published blogs" on blogs for select using (is_published = true);
-- Auth user full access
create policy "Auth full access blogs" on blogs for all using (auth.role() = 'authenticated');

-- Public read published projects
create policy "Public read published projects" on projects for select using (is_published = true);
create policy "Auth full access projects" on projects for all using (auth.role() = 'authenticated');

-- Public read skills
create policy "Public read skills" on skills for select using (true);
create policy "Auth full access skills" on skills for all using (auth.role() = 'authenticated');

-- Public read published testimonials
create policy "Public read published testimonials" on testimonials for select using (is_published = true);
create policy "Auth full access testimonials" on testimonials for all using (auth.role() = 'authenticated');

-- Public read services
create policy "Public read services" on services for select using (true);
create policy "Auth full access services" on services for all using (auth.role() = 'authenticated');

-- Public read about
create policy "Public read about" on about for select using (true);
create policy "Auth full access about" on about for all using (auth.role() = 'authenticated');

