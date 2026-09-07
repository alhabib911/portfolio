insert into storage.buckets (id, name, public)
values ('profile-images', 'profile-images', true)
on conflict (id) do update set public = true;

create policy "Authenticated users can upload profile images"
on storage.objects for insert
to authenticated
with check (bucket_id = 'profile-images');

create policy "Public can view profile images"
on storage.objects for select
to public
using (bucket_id = 'profile-images');