import React, { useState } from 'react';
import { growthCalendarDays } from '../data/growthProposalData';
import { CalendarContentItem } from '../types';
import { Calendar, Layers, Video, Image, Filter, Info, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ContentCalendarSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'calendar' | 'categories'>('calendar');
  const [filterType, setFilterType] = useState<'all' | 'Static Creative' | 'AI Video'>('all');
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(1);

  const filteredSlots = growthCalendarDays.filter((slot) => {
    if (filterType === 'all') return true;
    return slot.contentType === filterType;
  });

  const selectedSlot =
    growthCalendarDays.find((s) => s.day === selectedDayNumber) || growthCalendarDays[0];

  // Distinct categories grouped
  const categoriesList = Array.from(
    new Set(growthCalendarDays.map((item) => item.category))
  );

  return (
    <section id="content-calendar" className="py-16 sm:py-24 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold mb-3">
              <Calendar className="w-3.5 h-3.5 text-teal-600" />
              <span>30-Day Publishing Blueprint</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Sample Monthly Content Calendar
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
              A balanced mix of ISO education, AI video explainers, problem-solution breakdowns, and FAQ resolution.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="inline-flex p-1 bg-white border border-slate-200 rounded-xl shadow-subtle self-start md:self-auto">
            <button
              onClick={() => setViewMode('calendar')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'calendar'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Calendar View</span>
            </button>
            <button
              onClick={() => setViewMode('categories')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'categories'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Content Categories</span>
            </button>
          </div>
        </div>

        {/* Filter Pills & Rhythm Notice */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-200 gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center">
              <Filter className="w-3.5 h-3.5 mr-1" /> Filter:
            </span>
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1 text-xs font-semibold rounded-full border transition-all ${
                filterType === 'all'
                  ? 'bg-teal-700 text-white border-teal-700'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
              }`}
            >
              All 10 Slots
            </button>
            <button
              onClick={() => setFilterType('Static Creative')}
              className={`inline-flex items-center space-x-1 px-3 py-1 text-xs font-semibold rounded-full border transition-all ${
                filterType === 'Static Creative'
                  ? 'bg-teal-700 text-white border-teal-700'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
              }`}
            >
              <Image className="w-3 h-3" />
              <span>6 Static Creatives</span>
            </button>
            <button
              onClick={() => setFilterType('AI Video')}
              className={`inline-flex items-center space-x-1 px-3 py-1 text-xs font-semibold rounded-full border transition-all ${
                filterType === 'AI Video'
                  ? 'bg-teal-700 text-white border-teal-700'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
              }`}
            >
              <Video className="w-3 h-3" />
              <span>4 AI Videos</span>
            </button>
          </div>

          <div className="text-xs text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 inline-flex items-center space-x-1.5 shadow-subtle">
            <span className="w-2 h-2 rounded-full bg-teal-600"></span>
            <span>Rhythm: Published approx. once every 3 days</span>
          </div>
        </div>

        {/* View 1: Calendar View */}
        {viewMode === 'calendar' && (
          <div className="space-y-8">
            
            {/* Visual 30-Day Grid */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-card">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  30-Day Publication Cadence Map (Days 1 to 30)
                </span>
                <span className="text-xs text-slate-500">
                  Click any active day slot to inspect post plan
                </span>
              </div>

              {/* 30-Day Grid Boxes (5 rows of 6, or 6 of 5) */}
              <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-10 gap-2 sm:gap-2.5">
                {Array.from({ length: 30 }, (_, i) => i + 1).map((dayNum) => {
                  const matchingSlot = growthCalendarDays.find((s) => s.day === dayNum);
                  const isPublishDay = Boolean(matchingSlot);
                  const isSelected = selectedDayNumber === dayNum;
                  const isVideo = matchingSlot?.contentType === 'AI Video';

                  return (
                    <button
                      key={dayNum}
                      disabled={!isPublishDay}
                      onClick={() => isPublishDay && setSelectedDayNumber(dayNum)}
                      className={`relative min-h-[76px] sm:min-h-[88px] p-2 rounded-xl flex flex-col justify-between text-left transition-all ${
                        isPublishDay
                          ? isSelected
                            ? 'bg-teal-700 text-white shadow-md ring-2 ring-teal-600 scale-[1.03] z-10'
                            : 'bg-teal-50/60 border border-teal-200 text-slate-800 hover:border-teal-400 hover:bg-teal-50'
                          : 'bg-slate-50/50 border border-slate-100 text-slate-300 opacity-60 cursor-default'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className={`text-xs font-extrabold ${
                          isSelected ? 'text-white' : isPublishDay ? 'text-slate-900' : 'text-slate-400'
                        }`}>
                          D{dayNum < 10 ? `0${dayNum}` : dayNum}
                        </span>
                        {isPublishDay && (
                          isVideo ? (
                            <Video className={`w-3 h-3 ${isSelected ? 'text-teal-200' : 'text-teal-700'}`} />
                          ) : (
                            <Image className={`w-3 h-3 ${isSelected ? 'text-teal-200' : 'text-slate-600'}`} />
                          )
                        )}
                      </div>

                      {isPublishDay && matchingSlot ? (
                        <div className="mt-1">
                          <span className={`block text-[9px] font-bold uppercase tracking-wider truncate ${
                            isSelected ? 'text-teal-100' : isVideo ? 'text-teal-700' : 'text-slate-600'
                          }`}>
                            {matchingSlot.contentType}
                          </span>
                          <span className={`block text-[10px] font-semibold truncate leading-tight mt-0.5 ${
                            isSelected ? 'text-white' : 'text-slate-800'
                          }`}>
                            {matchingSlot.category}
                          </span>
                        </div>
                      ) : (
                        <span className="text-[9px] text-slate-300 self-end">Rest</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Grid Legend */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-3">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-3 h-3 rounded bg-teal-50 border border-teal-300"></span>
                    <span className="text-slate-700 font-medium">Publishing Day (~Every 3 Days)</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-3 h-3 rounded bg-slate-50 border border-slate-200"></span>
                    <span className="text-slate-400">Audience Distribution & Rest Interval</span>
                  </div>
                </div>
                <div className="text-[11px] text-slate-500">
                  Target: ~10 slots across a typical 30-day month
                </div>
              </div>
            </div>

            {/* Selected Day Slot Detail Card */}
            <div className="bg-white border border-teal-600/30 rounded-2xl p-6 sm:p-8 shadow-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-4">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-bold text-teal-700 uppercase tracking-wider mb-1">
                    <span className="px-2 py-0.5 bg-teal-50 border border-teal-200 rounded">
                      {selectedSlot.dayLabel}
                    </span>
                    <span>•</span>
                    <span>{selectedSlot.category}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {selectedSlot.title}
                  </h3>
                </div>

                <div className="flex items-center space-x-2 self-start lg:self-auto">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    selectedSlot.contentType === 'AI Video'
                      ? 'bg-teal-700 text-white'
                      : 'bg-slate-100 text-slate-800'
                  }`}>
                    {selectedSlot.contentType}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200">
                    {selectedSlot.platformFormat}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Strategic Objective
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {selectedSlot.objective}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Content Angle & Hook
                  </div>
                  <p className="text-slate-800 font-medium leading-relaxed italic">
                    “{selectedSlot.hook}”
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Call To Action (CTA)
                  </div>
                  <p className="text-teal-900 font-semibold leading-relaxed">
                    {selectedSlot.callToAction}
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* View 2: Content Categories View */}
        {viewMode === 'categories' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoriesList.map((cat, idx) => {
              const itemsInCat = growthCalendarDays.filter((i) => i.category === cat);
              return (
                <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card hover:border-teal-500/50 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-teal-700 uppercase tracking-wider bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200">
                      Pillar 0{idx + 1}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {itemsInCat.length} Scheduled Slot{itemsInCat.length > 1 ? 's' : ''}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {cat}
                  </h3>

                  <div className="space-y-3">
                    {itemsInCat.map((item, i) => (
                      <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-slate-700">{item.dayLabel}</span>
                          <span className="font-semibold text-teal-800">{item.contentType}</span>
                        </div>
                        <p className="text-slate-600 line-clamp-2">
                          {item.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Important Disclosure Banner */}
        <div className="mt-8 bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex items-start space-x-3 text-xs text-slate-600">
          <Info className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-900">Sample Schedule Notice:</strong>{' '}
            This is an illustrative sample schedule designed to demonstrate the publishing rhythm of approximately once every three days (~10 publishing slots per 30-day month). 
            Specific calendar dates, topics, and creative formats are agreed collaboratively before production and rely on timely client approvals. Daily posting is not included.
          </p>
        </div>

      </div>
    </section>
  );
};
