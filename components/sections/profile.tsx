'use client';

import { useEffect, useState } from 'react';
import { DiscordUserData } from '@/types';
import SectionHeading from '@/components/ui/section-heading';
import { FiActivity, FiClock, FiMusic, FiUser } from 'react-icons/fi';
import Image from 'next/image';

interface ProfileProps {
  discord: DiscordUserData | null;
}

const Profile = ({ discord }: ProfileProps) => {
  const [statusColor, setStatusColor] = useState('#747f8d'); // Default gray

  useEffect(() => {
    if (discord) {
      switch (discord.discord_status) {
        case 'online':
          setStatusColor('#43b581');
          break;
        case 'idle':
          setStatusColor('#faa61a');
          break;
        case 'dnd':
          setStatusColor('#f04747');
          break;
        default:
          setStatusColor('#747f8d');
      }
    }
  }, [discord]);

  if (!discord) {
    return (
      <section id="profile" className="section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="My Profile"
            subtitle="Loading Discord profile information..."
          />
          <div className="flex justify-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    );
  }

  const { discord_user, activities, spotify } = discord;
  const avatarUrl = `https://cdn.discordapp.com/avatars/${discord_user.id}/${discord_user.avatar}.png?size=512`;

  return (
    <section id="profile" className="section-padding bg-secondary/5">
      <div className="container-custom">
        <SectionHeading 
          title="My Profile"
          subtitle="Check out my Discord status and activities"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="bg-card rounded-xl shadow-lg overflow-hidden animate-fade-in">
            <div className="h-32 bg-gradient"></div>
            <div className="px-6 pb-6 pt-0 -mt-16">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-4 border-card overflow-hidden">
                  <Image 
                    src={avatarUrl} 
                    alt={discord_user.global_name || discord_user.username} 
                    width={128} 
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div 
                  className="absolute bottom-2 right-2 w-6 h-6 rounded-full border-4 border-card"
                  style={{ backgroundColor: statusColor }}
                ></div>
              </div>
              
              <div className="mt-4">
                <h3 className="text-2xl font-bold">{discord_user.global_name || discord_user.username}</h3>
                <p className="text-muted-foreground">@{discord_user.username}</p>
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <FiUser size={18} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Status</p>
                    <p className="font-medium capitalize">{discord.discord_status}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <FiClock size={18} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Platform</p>
                    <p className="font-medium">
                      {discord.active_on_discord_desktop ? 'Desktop' : 
                       discord.active_on_discord_mobile ? 'Mobile' : 
                       discord.active_on_discord_web ? 'Web' : 'Offline'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Activities */}
          <div className="lg:col-span-2 space-y-6">
            {/* Spotify */}
            {spotify && (
              <div className="bg-card rounded-xl shadow-lg p-6 animate-fade-in delay-100">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-[#1DB954]/10 text-[#1DB954]">
                    <FiMusic size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Listening to Spotify</h3>
                </div>
                
                <div className="mt-4 flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                    <Image 
                      src={spotify.album_art_url} 
                      alt={spotify.song} 
                      width={64} 
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg">{spotify.song}</h4>
                    <p className="text-muted-foreground">by {spotify.artist}</p>
                    <p className="text-muted-foreground text-sm">on {spotify.album}</p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Other Activities */}
            {activities && activities.length > 0 && activities.filter(a => a.name !== 'Spotify').map((activity, index) => (
              <div key={index} className="bg-card rounded-xl shadow-lg p-6 animate-fade-in" style={{ animationDelay: `${(index + 2) * 0.1}s` }}>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <FiActivity size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{activity.name}</h3>
                </div>
                
                <div className="mt-4 space-y-2">
                  {activity.details && (
                    <p className="text-foreground">{activity.details}</p>
                  )}
                  {activity.state && (
                    <p className="text-muted-foreground">{activity.state}</p>
                  )}
                  {activity.timestamps?.start && (
                    <p className="text-muted-foreground text-sm">
                      Started {new Date(activity.timestamps.start).toLocaleTimeString()}
                    </p>
                  )}
                </div>
                
                {activity.assets?.large_image && activity.application_id && (
                  <div className="mt-4">
                    <div className="w-full h-40 rounded-md overflow-hidden">
                      <Image 
                        src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`} 
                        alt={activity.name} 
                        width={320} 
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {(!activities || activities.length === 0 || activities.every(a => a.name === 'Spotify')) && (
              <div className="bg-card rounded-xl shadow-lg p-6 animate-fade-in delay-200">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <FiActivity size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">No Activities</h3>
                </div>
                
                <div className="mt-4">
                  <p className="text-muted-foreground">Currently not doing anything on Discord.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;